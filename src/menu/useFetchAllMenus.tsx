import { useEffect, useState } from 'react';
import { fetchMenus } from 'food/food.service';
import { useFoodDispatch } from 'food/food.context';

const useFetchAllMenus = () => {
  const dispatch = useFoodDispatch();
  const [menus, setMenu] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllMenus = async () => {
      setLoading(true);
      const { data, error: menuError } = await fetchMenus(dispatch);
      if (!menuError) {
        setLoading(false);
        setMenu(data);
      } else {
        setError(menuError);
      }
    };

    getAllMenus();
  }, [dispatch]);

  return { menus, loading, error };
};

export default useFetchAllMenus;
