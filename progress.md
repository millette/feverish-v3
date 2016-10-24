# Progrès

```
PAGE                      ALL     STUDENT         PROF
                          OK      GET     POST    GET     POST
------------------------  ------  ------  ------  ------  ------
/rendus                   YUP     OK      -       OK      -
/login                    YUP     OK      OK      OK      OK
/logout                   YUP     -       OK      -       OK
/etudiants                YUP     NOAUTH  -       OK      -
del etudiant              YUP     -       NOAUTH  -       OK
/edit/{ex}                YUP     NOAUTH  NOAUTH  OK      OK
/new                      YUP     NOAUTH  NOAUTH  OK      OK
/exercices                YUP     OK      -       OK      -
del ex                    YUP     -       NOAUTH  -       OK
/                         YUP     OK      NOAUTH  OK      OK
/resultats                YUP     OK      -       NOAUTH  -
/etudiant/{usr}           YUP     NOAUTH  -       OK      -
/configure                YUP     NOAUTH  NOAUTH  OK      OK
/etudiants/new            YUP     NOAUTH  NOAUTH  OK      OK
/etudiants/lot            YUP     NOAUTH  NOAUTH  OK      OK
/corrections/{ex}         YUP     NOAUTH  NOAUTH  OK      -
/corrections/{ex}/{usr}           NOAUTH  NOAUTH  OK      TODO
/score/{ex}                       OK      TODO    NOAUTH  NOAUTH
```
