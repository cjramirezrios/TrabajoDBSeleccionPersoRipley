export class Usuario{
   correo: String = "";
   contra: String = "";
     tipoUsuario: String = "";
     nroDni: String = "";
     nombres: String = "";
     apellidos: String = "";
}

export class Postulante{
    telefono :String = "";
    ciudad : String = "";
    distrito: String = "";
      gradoEstudio:String = "";
     fechaNac: Date = new Date();
      nroDni:String = "";
}

export class Administrador{
      area: String = "" ;
     nombreDep: String = "";
     modalidad: String = "";
     nroDni:String = "";
}

export class Convocatoria{
    cantVac: number = 0;
      puesto:String = "";
      codConv:number = 0;
     modEmpleo: String = "";
     fechaI: Date =new Date();
      fechaF:Date = new Date() ;
      estado: String = "";
      remun:number = 0;
      ubic: String = "";
     edadMax: number = 0;
      edadMin: number = 0;
      tipoEmp:String = "";
      codTest:number = 0;
}
