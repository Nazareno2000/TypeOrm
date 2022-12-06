import {Column, Entity} from 'typeorm'

@Entity()
export class Usuario{

    @Column()
    dni: number

    @Column()
    Nombre: string
    
    @Column()
    Apellido: string

    @Column()
    email: string
    @Column()
    domicilio: string

    @Column()
    telefono: number

    @Column()
    esadmin: boolean

    @Column()
    CodPostal: number
}