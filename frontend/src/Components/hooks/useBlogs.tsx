import axios from "axios";
import { useEffect, useState } from "react";
import { Base_Url } from "../../config";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get(Base_Url + "/blog/bulk", {
        withCredentials: true
      });
      setBlogs(res.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return {
    loading,
    blogs
  };
};

export default useBlogs;
