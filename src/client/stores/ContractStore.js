import { runInAction, action, observable } from 'mobx';
import ContractService from '../services/ContractService';

export default class ContractStore {
    appStore

    contractService;

    @observable
    contractsList;

    @observable
    contract;

    constructor(appStore) {
        this.contractService = new ContractService();
        this.contracts = [];
        this.appStore = appStore;
    }

    @action
    createContract = async () => {
        const contract = await this.contractService.createContract();
        runInAction(() => {
            console.log('create contract', contract);
            this.getContracts();
        });
    }

    @action
    getContracts = async () => {
        const contracts = await this.contractService.getContracts();
        runInAction(() => {
            console.log('get contracts', contracts);
            if (contracts) {
                this.contractsList = contracts;
            }
        });
    }

    @action
    getContractById = async (id) => {
        const contract = await this.contractService.getContractById(id);
        runInAction(() => {
            console.log('get contract by id', contract);
            if (contract) {
                this.contract = contract;
            }
        });
    }
}
