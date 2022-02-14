import { NS } from '@ns';
/* -+-+-+- show_texts.js -+-+-+- */
// Quickly prints the content of all the cached /scan/ texts

export async function main(ns: NS): Promise<void> {
    /* -----Settings ----- */
    // Show window 
    //tail();
    // Disable logging
    ns.disableLog('ALL');

    /* ----- Main ----- */
    ns.print('------ show_texts.js ------------------------------');

    //Iterating trough all files
    const textfiles = ns.ls(ns.getHostname(), '/scan/');
    ns.tprint('------------------------------------------------------------------');
    for (const z in textfiles) {
        var currentFile = ns.read(textfiles[z] as string);
        ns.tprint('File:' + textfiles[z] + ' - ' + currentFile);
    }
    ns.tprint('------------------------------------------------------------------');
    ns.tprint('---- Showing ' + textfiles.length + ' files ----');
    ns.print('---------------- show_texts DONE! -----------------');
}