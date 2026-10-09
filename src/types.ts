export type GoalType =
  | 'emagrecer'
  | 'ganhar-peso'
  | 'manter-peso'
  | 'ganhar-massa-muscular'
  | 'reduzir-gordura'
  | 'condicionamento'
  | 'sem-meta'
  | 'personalizado';

export type ModuleKey =
  | 'peso'
  | 'medidas'
  | 'fotos'
  | 'hidracao'
  | 'treinos'
  | 'exercicios'
  | 'alimentacao'
  | 'medicamentos'
  | 'diario'
  | 'metas'
  | 'graficos'
  | 'lembretes';

export interface Profile {
  id: string;
  name: string;
  birthDate: string;
  sex: string;
  height: number;
  currentWeight: number;
  initialWeight: number;
  targetWeight: number;
  startDate: string;
  goal: GoalType;
  customGoal?: string;
  modules: Record<ModuleKey, boolean>;
  measureTypes: string[];
  theme: 'light' | 'dark' | 'auto';
  accent: string;
  phrase: string;
  profilePhoto?: string;
}

export interface WeightEntry {
  id: string;
  date: string;
  weight: number;
  time?: string;
  note?: string;
}

export interface MeasureEntry {
  id: string;
  date: string;
  name: string;
  value: number;
  unit: string;
  note?: string;
}

export interface GoalEntry {
  id: string;
  name: string;
  category: string;
  initialValue: number;
  currentValue: number;
  targetValue: number;
  unit: string;
  startDate: string;
  dueDate?: string;
  status: 'em-andamento' | 'concluida' | 'pausada';
  notes?: string;
}

export interface MedicationEntry {
  id: string;
  date: string;
  name: string;
  dose: string;
  unit: string;
  location: string;
  note?: string;
  reaction?: string;
}

export interface HydrationEntry {
  id: string;
  date: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface WorkoutExercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  load: number;
  rest: number;
  notes?: string;
  order: number;
}

export interface WorkoutSession {
  id: string;
  name: string;
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
  durationMinutes: number;
  exercises: WorkoutExercise[];
  notes?: string;
}

export interface PhotoEntry {
  id: string;
  date: string;
  category: string;
  image: string;
  note?: string;
}

export interface DiaryEntry {
  id: string;
  date: string;
  text: string;
  mood?: string;
  energy?: string;
  hunger?: string;
  notes?: string;
}

export interface FoodEntry {
  id: string;
  date: string;
  meal: string;
  items: string;
  quantity?: string;
  category?: string;
  note?: string;
}

export interface ReminderEntry {
  id: string;
  name: string;
  description?: string;
  time: string;
  repeat: string;
  active: boolean;
  startDate: string;
  endDate?: string;
  weekdays: string[];
}

export interface DashboardCard {
  id: string;
  title: string;
  visible: boolean;
  order: number;
}

export interface AppState {
  profile: Profile | null;
  weightEntries: WeightEntry[];
  measureEntries: MeasureEntry[];
  goalEntries: GoalEntry[];
  medicationEntries: MedicationEntry[];
  hydrationEntries: HydrationEntry[];
  workoutSessions: WorkoutSession[];
  photoEntries: PhotoEntry[];
  diaryEntries: DiaryEntry[];
  foodEntries: FoodEntry[];
  reminderEntries: ReminderEntry[];
  dashboardCards: DashboardCard[];
}
