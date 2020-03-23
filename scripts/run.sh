sonic="sonic -c ./scripts/config.cfg"
pid=$(pidof 'sonic')

 if [ -z $pid]
 then
    printf "Starting process '%s' with command '%s'.\n" "sonic" "$sonic"
    $sonic &
 else
    printf "Process '%s' is running.\n" "sonic"
 fi

exit
