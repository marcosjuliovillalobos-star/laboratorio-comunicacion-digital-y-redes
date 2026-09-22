import React, { useState, useEffect } from 'react';
import { UserProgressState } from './types';
import { loadProgress, saveProgress, resetEntireLab } from './services/storage';
import { ALL_CLASSES, getClassById } from './data/classes';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ResetConfirmModal } from './components/common/ResetConfirmModal';
import { TeacherAuthModal } from './components/teacher/TeacherAuthModal';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { StudentDashboard } from './components/student/StudentDashboard';
import { AxesView } from './components/student/AxesView';
import { ClassesListView } from './components/student/ClassesListView';
import { ClassLabView } from './components/student/ClassLabView';
import { CampaignProjectView } from './components/student/CampaignProjectView';
import { PortfolioView } from './components/student/PortfolioView';
import { ProgressView } from './components/student/ProgressView';
import { AchievementsView } from './components/student/AchievementsView';
import { HelpView } from './components/student/HelpView';

export default function App() {
  const [progressState, setProgressState] = useState<UserProgressState>(() => loadProgress());
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [activeClassId, setActiveClassId] = useState<number>(1);
  const [isTeacherMode, setIsTeacherMode] = useState<boolean>(false);
  const [isTeacherAuthModalOpen, setIsTeacherAuthModalOpen] = useState<boolean>(false);
  const [isResetAllModalOpen, setIsResetAllModalOpen] = useState<boolean>(false);

  // Escuchar y guardar cambios de estado
  const handleUpdateState = (newState: UserProgressState) => {
    setProgressState(newState);
    saveProgress(newState);
  };

  const handleResetAllConfirm = () => {
    const fresh = resetEntireLab();
    setProgressState(fresh);
    setActiveTab('inicio');
  };

  const handleNavigateClass = (classId: number) => {
    setActiveClassId(classId);
    setActiveTab('clase-detalle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentClassData = getClassById(activeClassId) || ALL_CLASSES[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Barra de Navegación y Cabecera */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setIsTeacherMode(false);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        progressState={progressState}
        onOpenTeacherMode={() => setIsTeacherAuthModalOpen(true)}
        onRequestResetAll={() => setIsResetAllModalOpen(true)}
        isTeacherMode={isTeacherMode}
        onExitTeacherMode={() => setIsTeacherMode(false)}
      />

      {/* Contenedor de Contenido Principal */}
      <main className="flex-1">
        {isTeacherMode ? (
          <TeacherDashboard
            progressState={progressState}
            onUpdateState={handleUpdateState}
            onSelectClassToInspect={(classId) => {
              setIsTeacherMode(false);
              handleNavigateClass(classId);
            }}
            onExitTeacherMode={() => setIsTeacherMode(false)}
            onRequestResetAll={() => setIsResetAllModalOpen(true)}
          />
        ) : (
          <>
            {activeTab === 'inicio' && (
              <StudentDashboard
                progressState={progressState}
                onNavigateClass={handleNavigateClass}
                onNavigateTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {activeTab === 'ejes' && (
              <AxesView
                progressState={progressState}
                onNavigateClass={handleNavigateClass}
                onUpdateState={handleUpdateState}
              />
            )}

            {activeTab === 'clases' && (
              <ClassesListView
                progressState={progressState}
                onNavigateClass={handleNavigateClass}
                onUpdateState={handleUpdateState}
              />
            )}

            {activeTab === 'clase-detalle' && (
              <ClassLabView
                classData={currentClassData}
                progressState={progressState}
                onUpdateState={handleUpdateState}
                onNavigateClass={handleNavigateClass}
                onBackToList={() => setActiveTab('clases')}
              />
            )}

            {activeTab === 'campana' && (
              <CampaignProjectView
                progressState={progressState}
                onUpdateState={handleUpdateState}
                onNavigateClass={handleNavigateClass}
              />
            )}

            {activeTab === 'progreso' && (
              <ProgressView
                progressState={progressState}
                onNavigateClass={handleNavigateClass}
              />
            )}

            {activeTab === 'logros' && (
              <AchievementsView
                progressState={progressState}
              />
            )}

            {activeTab === 'portafolio' && (
              <PortfolioView
                progressState={progressState}
                onNavigateClass={handleNavigateClass}
              />
            )}

            {activeTab === 'ayuda' && (
              <HelpView />
            )}
          </>
        )}
      </main>

      {/* Pie de Página Institucional */}
      <Footer onNavigateHelp={() => {
        setIsTeacherMode(false);
        setActiveTab('ayuda');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Modal de Acceso Docente */}
      <TeacherAuthModal
        isOpen={isTeacherAuthModalOpen}
        onClose={() => setIsTeacherAuthModalOpen(false)}
        onSuccess={() => {
          setIsTeacherAuthModalOpen(false);
          setIsTeacherMode(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modal de Confirmación de Restablecimiento Total */}
      <ResetConfirmModal
        isOpen={isResetAllModalOpen}
        onClose={() => setIsResetAllModalOpen(false)}
        onConfirm={handleResetAllConfirm}
      />
    </div>
  );
}
