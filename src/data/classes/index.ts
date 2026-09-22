import { ClassData } from '../../types';
import { AXIS_1_CLASSES } from './axis1';
import { AXIS_2_CLASSES } from './axis2';
import { AXIS_3_CLASSES } from './axis3';
import { AXIS_4_CLASSES } from './axis4';
import { AXIS_5_CLASSES } from './axis5';

export const ALL_CLASSES: ClassData[] = [
  ...AXIS_1_CLASSES,
  ...AXIS_2_CLASSES,
  ...AXIS_3_CLASSES,
  ...AXIS_4_CLASSES,
  ...AXIS_5_CLASSES
];

export const CLASSES_BY_ID: Record<number, ClassData> = {};
ALL_CLASSES.forEach((c) => {
  CLASSES_BY_ID[c.id] = c;
});

export function getClassById(id: number): ClassData | undefined {
  return CLASSES_BY_ID[id];
}

export function getClassesByAxis(axisId: string): ClassData[] {
  return ALL_CLASSES.filter((c) => c.ejeId === axisId);
}
