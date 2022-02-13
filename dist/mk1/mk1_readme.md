# BitBurner_scripts
/v1.0 - basic_scripts - ns1 
 Basic early-game scripts
----------------------------------------------------------------------------------
- First bactch of scripts.
- Shows basic hud, scans servers, buys/upgrades servers and basic mass attack on single server.
- Good for game start but quite ineficient.  
----------------------------------------------------------------------------------
--- How to ---
- Copy all files to your home server root
- Run command: "run start.script"
- That's it. Everything will unfold from there. Most routines will popup a log for troubleshooting but you can close if you want
----------------------------------------------------------------------------------
----- Scripts -----
start.script
- Initializes everything then dies

initscan.script
- Does the initial server scan and prepares things
- Even though servers don't change currently I want to work assuming they could eventually, so no hardcoded list/stats anywhere
- Starts the attack and servers script

targetinfo.script
- Basic hud with info on best target and current servers and upgrades

scanloop.script
- Keeps scanning and updating the server list
- Checks for newly hackable servers

homeattack.script
- Uses 80% of ressources to brute attack the most valuable target
- Super basic

servers.script
- Buys 8go servers up to 25
- Then starts upgrading them by 4x
- Keeps the target between upgrade
- Asks before the next batch of upgrades

update.script
- Retargets everything to best target
- Really bad way of doing it I know but it works fine for gamestart

attack.script
- Iterates trough the weak servers and breaks them

break.script
- Should just be a function, but hey. Starter scripts bitches!

hack.script
- Simple triple function hack script

grow.script
steal.script
weaken.script
- basic script with a single task

delete_files.script
-Deletes all of the *.txt files for cleanup

show_texts.js
-Prints the content of all the txt files in /scan for debug purposes
