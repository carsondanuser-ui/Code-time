import { world, system } from "@minecraft/server";

system.runInterval(() => {
    for (const player of world.getPlayers()) {
        const inventory = player.getComponent("minecraft:inventory");

        if (!inventory) continue;

        const item = inventory.container.getItem(
            player.selectedSlotIndex
        );

        if (item?.nameTag === "Test Collectible") {
            player.sendMessage("Recognized: Test Collectible!");
        }
    }
}, 20);
