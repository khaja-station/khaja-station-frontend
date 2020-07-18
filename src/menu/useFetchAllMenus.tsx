import { useEffect, useState } from 'react';
import { fetchMenus } from 'food/food.service';

const useFetchAllMenus = () => {
  const [menus, setMenu] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllMenus = async () => {
      setLoading(true);
      const { data, error: menuError } = await fetchMenus();
      if (!menuError) {
        setLoading(false);
        setMenu(data);
      } else {
        setError(menuError);
      }
    };

    getAllMenus();
  }, []);

  return { menus, loading, error };
};

export default useFetchAllMenus;
