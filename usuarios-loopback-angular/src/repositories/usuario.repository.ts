import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GaziDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.gazi') dataSource: GaziDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
