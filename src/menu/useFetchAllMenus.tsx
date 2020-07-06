import { useEffect, useState } from 'react';
import { fetchMenus } from 'food/food.service';
import { useFoodState, useFoodDispatch } from 'food/food.context';

const useFetchAllMenus = () => {
  const { menus } = useFoodState();
  const dispatch = useFoodDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllMenus = async () => {
      setLoading(true);
      await fetchMenus(dispatch);
      setLoading(false);
    };
    if (!menus) {
      getAllMenus();
    }
  }, [dispatch, menus]);

  return { menus, loading };
};

export default useFetchAllMenus;
