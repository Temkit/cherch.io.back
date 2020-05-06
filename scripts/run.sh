sonic="sonic -c ./scripts/config.cfg"
pid=$(pidof sonic)

 if [ -z $pid]
 then
    printf "Starting process '%s' with command '%s'.\n" "sonic" "$sonic"
    $sonic &
 else
    printf "Restarting process '%s' with command '%s'.\n" "sonic" "$sonic"
    kill -9 $pid
    $sonic &
 fi

exit

