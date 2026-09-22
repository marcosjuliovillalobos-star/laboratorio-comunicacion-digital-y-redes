# Control de calidad realizado

- 26 clases presentes, numeradas 1–26 sin duplicados.
- Fechas verificadas: todos los encuentros corresponden a martes o jueves entre el 01/09/2026 y el 26/11/2026.
- 5 ejes presentes con distribución 4 + 5 + 9 + 4 + 4.
- Todas las clases contienen objetivo, contenidos, explicación, ejemplos, tres actividades, producción, autoevaluación y puntaje máximo.
- Se corrigió el tipo de actividad `caso`, que no estaba contemplado en el tipo TypeScript.
- Se corrigieron clases Tailwind inexistentes (`bg-slate-850` y `border-slate-750`).
- Se corrigió la configuración Vite para evitar dependencias de `__dirname`/`process.env` propias de una configuración ESM.
- Se eliminaron dependencias y referencias de Gemini/Express/Dotenv que no utiliza la aplicación.
- Se actualizó README para uso local y GitHub.
- Se agregó confirmación antes de reinicios desde el Panel Docente.
- Se versionó la clave de `localStorage` a v2 y se reforzó la normalización/carga del estado.
- Se ajustaron los puntajes máximos de clase a 129, que coincide con las actividades actualmente definidas (75 + autoevaluación + 50 de producción), evitando mostrar `/100` con una puntuación posible mayor.
- Se ajustaron los rangos de niveles para que sean alcanzables dentro del puntaje máximo real del laboratorio.

## Verificación de compilación

En el entorno de revisión no fue posible completar `npm install`: el acceso al registro de npm agotó el tiempo de espera. Por eso no se debe afirmar que se ejecutó un `npm run build` real en este entorno. El código fue sometido a controles estáticos y correcciones de estructura.

En una máquina con Internet, ejecutar:

```bash
npm install
npm run lint
npm run build
```

antes del primer `git push`.
