import { BootStrapConfig, nodeRoomBootstrap } from 'node-room-client';

export function bootstrapNodeRoom(config: BootStrapConfig) {
    return nodeRoomBootstrap(config);
}
