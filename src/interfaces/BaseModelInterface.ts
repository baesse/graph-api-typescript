import ModelsInterface from './ModelsInterface';

export default interface BaseModelInterface {
    prototype?;
    associate?(models: ModelsInterface);
}
