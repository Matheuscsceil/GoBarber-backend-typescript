import {container} from 'tsyringe'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepopsitory'
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentRepository'

import IUsersRepository from '@modules/users/repositories/IUserRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
