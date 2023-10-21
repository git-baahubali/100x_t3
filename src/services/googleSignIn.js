import { Auth } from '@supabase/ui';
import { supabase } from './yourSupabaseClient';

function GoogleSignIn() {
  const { user } = Auth.useUser();

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signIn({ provider: 'google' });
    if (error) console.error('Error signing in with Google:', error.message);
  };

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      ) : (
        // The user is signed in, you can display the protected content
      )}
    </div>
  );
}

export default GoogleSignIn;
