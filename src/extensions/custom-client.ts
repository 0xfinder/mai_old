import {
  ActivityType,
  Client,
  ClientOptions,
  ClientPresence,
} from "discord.js";

export class CustomClient extends Client {
  constructor(clientOptions: ClientOptions) {
    super(clientOptions);
  }

  public setPresence(
    type: Exclude<ActivityType, "CUSTOM">,
    name: string,
    url: string
  ): ClientPresence | undefined {
    return this.user?.setPresence({
      activities: [
        {
          type,
          name,
          url,
        },
      ],
    });
  }
}
