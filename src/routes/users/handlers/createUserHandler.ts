import {
    Request,
    IReply
} from 'hapi';
import User from '../../../models/User';
import Boom from 'boom';

const createUserHandler = (request: Request, reply: IReply) => {
      let user = new User();
      user.email = request.payload.email;
      user.username = request.payload.username;
      user.save((err, user) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        reply().code(201);
      });
};

export { createUserHandler };