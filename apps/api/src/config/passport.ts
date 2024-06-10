import {
  ExtractJwt,
  Strategy as JWTStrategy,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";

import { userService } from "~/services";

const opts: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET!,
};

const jwtStrategy = new JWTStrategy(opts, async (payload, done) => {
  try {
    const user = await userService.findUserById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export default jwtStrategy;
