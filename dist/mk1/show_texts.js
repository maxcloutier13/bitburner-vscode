/* -+-+-+- show_texts.js -+-+-+- */
// Quickly prints the content of all the cached /scan/ texts
export async function main(ns) {
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
        var currentFile = ns.read(textfiles[z]);
        ns.tprint('File:' + textfiles[z] + ' - ' + currentFile);
    }
    ns.tprint('------------------------------------------------------------------');
    ns.tprint('---- Showing ' + textfiles.length + ' files ----');
    ns.print('---------------- show_texts DONE! -----------------');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd190ZXh0cy5qcyIsInNvdXJjZVJvb3QiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvc291cmNlcy8iLCJzb3VyY2VzIjpbIm1rMS9zaG93X3RleHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG1DQUFtQztBQUNuQyw0REFBNEQ7QUFFNUQsTUFBTSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsRUFBTTtJQUM3Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyQixzQkFBc0I7SUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0lBRWhFLDRCQUE0QjtJQUM1QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxFQUFFLENBQUMsTUFBTSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7SUFDaEYsS0FBSyxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDdkIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0lBQ2hGLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDOUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQ3BFLENBQUMifQ==