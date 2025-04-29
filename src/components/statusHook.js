import { useEffect, useState } from 'react';
import supabase from '../inf/supabaseconfig'; 

export default function useStatusData() {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    async function fetchStatusData() {
      const { data, error } = await supabase.from('status').select('*');
      if (error) {
        console.error('Error fetching status data:', error);
        return;
      }
      setStatusData(data);
    }

    fetchStatusData();
  }, []);

  return statusData;
}