sonic="sonic -c ./config.cfg"
pid=$(pidof 'sonic')
express=$(node './../app.js')

 if [ -z $pid]
 then
    printf "Starting process '%s' with command '%s'.\n" "sonic" "$sonic"
    $sonic &

     if [ -z $express]
 then
    printf "Starting process '%s' with command '%s'.\n" "Node Express" "$express"
    $express &
 else
    printf "Process '%s' is running.\n" "express"
 fi
 else
    printf "Process '%s' is running.\n" "sonic"
 fi

exit
