import { useEffect, useState } from "react";
import { Base_Url } from "../../config";
import axios from "axios";

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  const getBlog = async () => {
    try {
      const res = await axios.get(Base_Url + "/blog/" + id, {
        withCredentials: true
      });
      setBlog(res.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, blog };
};

export default useBlog;
