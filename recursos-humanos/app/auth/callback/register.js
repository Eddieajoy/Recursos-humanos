// auth/register.js
import { supabase } from '../utils/supabaseClient';

const handleRegister = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) console.error('Error registering:', error);
  return user;
};
