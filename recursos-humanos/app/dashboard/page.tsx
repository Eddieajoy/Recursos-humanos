// app/dashboard/page.tsx
import { supabase } from '../../utils/supabase/supabaseClient';
import { useEffect, useState } from 'react';

type Empleado = {
  id: number;
  nombre: string;
};

const Dashboard = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      const { data, error } = await supabase.from<Empleado>('empleados').select('*');
      if (error) {
        console.error('Error fetching empleados:', error);
      } else {
        console.log('Data fetched:', data); // Verifica que los datos sean correctos
        setEmpleados(data || []); // Asegúrate de que `data` no sea `null`
      }
    };
    fetchEmpleados();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado.id}>{empleado.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


