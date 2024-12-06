Kaip pasileisti projektą 

* Iš gitHubo parsisiūsti įkeltą main. 
    >Pasirenkam papkę kurioj norėsim susikelt projektą. Pastebėjimas: GitHubas pats sukurs vieną root papkę su pavadinimu 'Movies-project', todėl tokios papkės nesikurti atskirai.
    >Atsidarom per terminalą savo papkę kurioj klonuosim projektą.
    >Terminale įvedam $ git clone https://github.com/TadasJS/Movies-project.git
    >Turit matyti pakes client, server, failus .gitignore README.md

*Suinstaliuojam reikiamus paketus  į client papkę:
    >Einam i client papkę: $ cd ./client 
    >suinstaliuojam node_modules: $ npm i 
    

*Suinstaliuojam reikiamus paketus į server papkę:
    >išeinam iš client papkes: $ cd ..
    >einam į server papkę: cd ./server
    >suinstaluojam node_modules: $ npm i 
     

*Kaip pasileisti projektą/us: 
    >Atitinkaimai kurią dalį norim pasileisti server ar client, einam į tą papkę ir pasileidžiam apsą per CL: $ npm run dev
    >Jeigu reikia paleisti ir server ir client vienu metu, tada įsijungiam du terminalus, vienas jų turi būti client papkėj kitas server papkėj. Abiejuose terminaluose per CL: $ npm run dev

*Fronto veikimo patikrinimas:   
    >Pasiledus client dalį turi matytis viršuje užrašas HEADER CONTENT, viduryje Juoda užpildyta lentelė, apačioje užrašas FOOTER CONTENT.
    >Adreso laukelyje surinkus bet kokį kitą adresą, juoda lentelė turi dingti, vietoj jos atsirasti užrašas NO PAGE 404 CONTENT. patikrinimo adreso pvz.: http://localhost:5173/ffff
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SVEIKINU FRONTAS SĖKMINGAI PALEISTAS. GERO DARBO FRONTE!!!!!!!!!!!!!!!!!!!!!!

*Peržiūrėkite ir susipažinkite su client papkės struktūra. Klausimai per Teamsus :).

*Backo veikimo patikrinimas: 
    >Pasileidus server dalį terminalas turi rodyti užrašą 'Server running on http://localhost:3000' (tik be kabučių)
    >Prisijungus prie serverio turit pamatyti užrašą :
        {
    "status": 200,
    "msg": "SERVER HOME PAGE"
        }
    >Surinkus bet kokį kitą adresą turit pamatyti užrašą: 
            {
    "status": 200,
    "msg": "SERVER NO PAGE"
        }
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SVEIKINU2 BCKAS SĖKMINGAI PALEISTAS. GERO DARBO BACKE!!!!!!!!!!!!!!!!!!!!!!





    

