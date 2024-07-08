import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState("");
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchStoredUser = async () => {
      // const accessToken = await AsyncStorage.getItem("access_token");
      // const refreshToken = await AsyncStorage.getItem("refresh_token");
      const user_data = await AsyncStorage.getItem("user");
      const user_object = JSON.parse(user_data as string)
      setUser(user_object);
    };
    fetchStoredUser();
  },[refetch]);
  return { loading, user, error, setRefetch, refetch };
}
