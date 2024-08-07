// auth/login.js
const handleLogin = async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error('Error logging in:', error);
    return user;
  };
  