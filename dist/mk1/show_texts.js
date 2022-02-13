/** @param {import(".").NS } ns */
export async function main(ns) {
    var directory = "/mk1/scan/";
    ns.disableLog("ALL");
    //Iterating trough all files
    var textfiles = ns.ls(ns.getHostname(), "/scan/");
    ns.tprint("------------------------------------------------------------------")
    for (var z in textfiles) {
        ns.tprint("File:" + textfiles[z] + " - " + ns.read(textfiles[z]))
    }
    ns.tprint("------------------------------------------------------------------")
    ns.tprint("-- Showing " + textfiles.length + " files");
}