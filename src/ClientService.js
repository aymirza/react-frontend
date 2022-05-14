import axios from "axios";

const clients_url = "http://localhost:8085/clients";

class ClientService{

    getClients(){
        return axios.get(clients_url);
    }

    createClients(client){
        return axios.post(clients_url,client);
    }

    getClientById(clientId){
        return axios.get(clients_url+'/'+clientId);
    }

    updateClient(client,clientId){
        return axios.put(clients_url+'/'+clientId,client);
    }

    deleteClient(clientId){
        return axios.delete(clients_url+'/'+clientId);
    }

}



