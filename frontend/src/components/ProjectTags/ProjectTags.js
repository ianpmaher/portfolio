import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const SmallCardLabel = styled.li`
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const ProjectTags = ({ tags }) => {
    const tagsList = tags.map((tag) => 
        <SmallCard key={tag}>
            <SmallCardLabel label={tag} />
        </SmallCard>
    );

    return (
        <ul>
            {tagsList}
        </ul>
    );
}

export default ProjectTags;