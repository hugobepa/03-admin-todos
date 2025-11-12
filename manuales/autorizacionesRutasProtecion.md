# Autorizaciones + Proteccion de rutas

# configuracion inicial
npm install next-auth ---- https://next-auth.js.org/getting-started/example
codigo .env--NEXTAUTH_SECRET=  --------- https://generate-secret.vercel.app/32



#oAth-GithubProvider
https://next-auth.js.org/providers/
https://next-auth.js.org/configuration/providers/oauth
https://next-auth.js.org/configuration/providers/oauth#built-in-providers
https://next-auth.js.org/providers/github
https://next-auth.js.org/v3/getting-started/rest-api#get-apiauthcallbackprovider

#github
fotoPerfil/settings
       <> developer settings--OAuth Apps--New OAuth App
            name: Admin-todos
            Homepage URL: https://fernando-herrera.com
    Autorizacion callBackURL (importante): ultimo/:provider 
                http://localhost:3000/api/auth/callback/github 

           apretar botton: register  Application   
            -----------

        copiar "Client ID"  

  VC --- .env GITHUB_ID=  pegarlo Cliet ID --- GITHUB_ID=xxxxxx     

  github-- botton -- generate a new client secret (! solo se genera una vez) y copiar lo 
  VC ---- .env GITHUB_SECRET= pegarlo client secret ----- GITHUB_SECRET=xxxxx       
  github ---- final boton Update application   