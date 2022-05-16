package m2i.exo.forum.forum.services;

import java.util.List;



/**
 * Interface pour les services CRUD.
 * Permet de gagner du temps pour créer des services ayant les méthodes de bases d'un CRUD.
 * @param <T> Type du modèle lié au service.
 */
public interface GenericCRUDService<T> {

    /**
     * Retourne une liste contenant l'ensemble des modèles de type <T>.
     * @return
     */
    public List<T> findAll();

    /**
     * Sauvegarde une version d'un modèle de type <T>
     * @param entity la version à sauvegarder.
     * @return la version sauvegardé.
     */
    public T save(T entity);

    /**
     * Supprime un modèle en fonction de son id.
     * @param id du modèle a supprimer.
     */
    public void deleteById(String id);

    /**
     * Retourne le modèle portant l'id demandé.
     * @param id demandé.
     * @return un modèle
     */
    public T findById(String id);
   
}