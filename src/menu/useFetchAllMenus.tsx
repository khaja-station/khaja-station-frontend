import { useEffect, useState } from 'react';
import { fetchMenus } from 'food/food.service';

const useFetchAllMenus = () => {
  const [menus, setMenu] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllMenus = async () => {
      setLoading(true);
      const { data, error } = await fetchMenus();
      if (!error) {
        setLoading(false);
        setMenu(data);
      }
    };

    getAllMenus();
  }, []);

  return { menus, loading };
};

export default useFetchAllMenus;
