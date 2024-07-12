import { ReactNode } from "react";

interface AppProviderProps {
   children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
   return (
      // All the providers of application goes here.
      <div>{children}</div>
   );
};
