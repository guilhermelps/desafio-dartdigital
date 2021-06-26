import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Repository() {

  const [repositories, setRepositories] = useState([]);
  const [repositoriesFilter, setRepositoriesFilter] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
      setRepositoriesFilter(response.data);
    })
  }, []);

  const handleKeyUp = useCallback((e) => {
      setRepositoriesFilter(repositories?.filter( (value) => {
          return value.full_name.toLowerCase().includes(`${e.currentTarget.value.toLowerCase()}`);
      }))
  }, [repositories]);

  return(
    <>
      <div className="repo-filter">
        <input type="text" ref={inputRef} onKeyUp={handleKeyUp} placeholder="Digite o nome do repositório" />
      </div>
      <div id="repo-list">
        {repositoriesFilter.map(repository => (
          <a key={repository.full_name} href={repository.html_url} target="_blank">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div className="repo-info">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20}/>
          </a>
        ))}
      </div>
    </>
  );
}