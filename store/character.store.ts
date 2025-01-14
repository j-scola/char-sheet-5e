import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface CharacterInfoState {
  name: '';
  age: number;
  height: number;
  changeName: (name: string) => void;
  changeAge: (age: number) => void;
  changeHeight: (height: number) => void;
}
