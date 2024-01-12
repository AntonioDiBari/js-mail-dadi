# MAIL

## TRACCIA

```plaintext

Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
```

## SVOLGIMENTO

- Creo un Array con 10 email
- Domando all' utente il suo indirizzo mail tramite un input
- Controllo con un ciclo che si ripeterà 10 volte (in questo caso)
- SE a partire dal primo EL dell' Array quest'ultimo è uguale alla mail inserita
- ALLORA immagazzino il messaggio che mi dirà "Ok puoi accedere, mail presente in lista" e sovrascrivo l'indice
  del for con direttamente la lunghezza dell' Array, così da interrompere il ciclo qualora si verifichi la condizione dell'IF
- ALTRIMENTI immagazzino il messaggio "Non puoi accedere, mail non presente in lista"
  -Stampo il messaggio
