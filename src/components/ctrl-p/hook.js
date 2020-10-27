import { useEffect } from 'react'

export const useCtrlP = () => {
  document.addEventListener('keydown', handleKey, false);

  return () => {
    document.removeEventListener('keydown', handleKey, false);
  }
}