
// version: '3.8'
// services:
//   mongodb:
//     image: mongo:6-jammy
//     ports:
//       - '27017:27017'
//     volumes:
//       - dbdata6:/data/db
// volumes:
//   dbdata6:

class Service {
    
    constructor(){

    }

}

class DockerComposeBuilder {
    
    constructor(){

    }

    addService(serviceConfig){
        const {
            name,
            ports,
        } = serviceConfig;

    }

    addVolumes(){
        throw new Error("addVolumes is not implemented");
    }

    addNetwork(){
        throw new Error("addNetwork is not implemented");
    }

}