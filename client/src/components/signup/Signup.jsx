import Button from "../global/button/Button";

const Signup = () => {
   return (
      <section>
         <h1>Sign up</h1>

         {/* Google */}
         <Button>Continue with Google</Button>

         {/* Email */}
         <div>or with Email</div>
         
         {/* <TexteLignes texte="Ou avec courriel" />
         <Form
            method="post"
            action={process.env.NEXT_PUBLIC_API_URL + "/auth/inscrire"}
         > */}
         {/* Email */}
         {/* <Text
               type="email"
               name="email"
               required={true}
               texte="Adresse courriel"
               autoComplete="email"
               autofocus
            /> */}

         {/* Password */}
         {/* <Text
               type="password"
               name="password"
               required={true}
               texte="Mot de passe"
               autoComplete="new-password"
               validationTexte="Mot de passe de minimum 6 caractères."
               minLength={6}
            />
            <MarginDiv margin="0 0 16px 0" />
            <Bouton
               className="purple big"
               texte="S'inscrire avec courriel"
               type="submit"
            />
         </Form> */}

         {/* Se connecter */}
         {/* <div>
            <Link href="/auth/connecter">
               <strong>Se connecter</strong>
            </Link>
         </div> */}
      </section>
   );
};

export default Signup;
