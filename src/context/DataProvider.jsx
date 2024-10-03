import { createContext, useEffect, useState } from "react";

const DataContext = createContext({
  auditoriesSchedule: [],
  teacherSchedule: [],
  loading: false,
});

export function DataProviderContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [teacherSchedule, setTeacherSchedule] = useState([]);
  const [auditoriesSchedule, setAuditoriesSchedule] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        auditoriesSchedule,
        teacherSchedule,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;

export function useData() {
  return useContext(DataContext);
}
