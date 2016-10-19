# Progrès

```
PAGE                      ALL     STUDENT         PROF
                          OK      GET     POST    GET     POST
------------------------  ------  ------  ------  ------  ------
/rendus                   YUP     OK      -       OK      -  
/login                    YUP     OK      OK      OK      OK  
/logout                   YUP     -       OK      -       OK  
/etudiants                YUP     NOAUTH  NOAUTH  OK      -  
del etudiant              YUP     -       NOAUTH  -       OK  
/edit/{ex}                YUP     NOAUTH  NOAUTH  OK      OK  
/new                      YUP     NOAUTH  NOAUTH  OK      OK  
/exercices                YUP     OK      -       OK      -  
del ex                    YUP     -       NOAUTH  -       OK  
/                         YUP     OK      NOAUTH  OK      OK  
/corrections/{ex}                 NOAUTH  NOAUTH  OK      TODO
/corrections/{ex}/{usr}           NOAUTH  NOAUTH  OK      TODO
/score/{ex}                       PART    -       NOAUTH  -  
/resultats                        PART    -       NOAUTH  -  
/etudiant/{usr}                   NOAUTH  -       PART    -  
/etudiants/new                    NOAUTH  NOAUTH  OK      TODO
/etudiants/lot                    NOAUTH  NOAUTH  OK      TODO
/configure                        NOAUTH  NOAUTH  OK      TODO

```
