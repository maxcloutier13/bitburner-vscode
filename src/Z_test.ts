import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
    //Quick ts to ns test...
    ns.tail();
    ns.print('Hey it worked!');
    await ns.sleep(10000);
}