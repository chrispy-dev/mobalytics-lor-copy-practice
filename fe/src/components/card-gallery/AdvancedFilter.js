import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { toggleFilter, addFilterOption, removeFilterOption } from '../../store/actions';
import { Container } from './CardGallery';
import { LongHr, NavIcon } from '../NavMenu';

const AdvancedFilter = ({ filterToggle, toggleFilter, addFilterOption, removeFilterOption, filterOptions }) => {
    return (
        <Container hide={!filterToggle} advancedFilter>
            <ToggleContainer>
                <FilterTitle>Filters</FilterTitle>
                <ButtonContainer onClick={() => toggleFilter()}>
                    <ToggleButton className="fas fa-times"></ToggleButton>
                </ButtonContainer>
            </ToggleContainer>

            <Container filterFlexItem>
                <FlexContainer>
                    <FilterTitle subTitle>REGION</FilterTitle>
                    <LongHr></LongHr>
                </FlexContainer>
                <FlexContainer region>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Demacia') 
                        ? removeFilterOption('Demacia')
                        : addFilterOption('Demacia')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Demacia')} src="./img/regions/icon-demacia.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Demacia')}>Demacia</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Freljord') 
                        ? removeFilterOption('Freljord')
                        : addFilterOption('Freljord')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Freljord')} src="./img/regions/icon-freljord.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Freljord')}>Freljord</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Ionia') 
                        ? removeFilterOption('Ionia')
                        : addFilterOption('Ionia')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Ionia')} src="./img/regions/icon-ionia.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Ionia')}>Ionia</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Noxus') 
                        ? removeFilterOption('Noxus')
                        : addFilterOption('Noxus')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Noxus')} src="./img/regions/icon-noxus.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Noxus')}>Noxus</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Piltover & Zaun') 
                        ? removeFilterOption('Piltover & Zaun')
                        : addFilterOption('Piltover & Zaun')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Piltover & Zaun')} src="./img/regions/icon-piltoverzuan.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Piltover & Zaun')}>Piltover &#38; Zaun</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer onClick={() => filterOptions.regions.includes('Shadow Isles') 
                        ? removeFilterOption('Shadow Isles')
                        : addFilterOption('Shadow Isles')
                    }>
                        <RegionImg active={filterOptions.regions.includes('Shadow Isles')} src="./img/regions/icon-shadowisles.png" alt="#" />
                        <CategoryText active={filterOptions.regions.includes('Shadow Isles')}>Shadow Isles</CategoryText>
                    </SingleCategoryContainer>
                </FlexContainer>
            </Container>

            <Container filterFlexItem>
                <FlexContainer>
                    <FilterTitle subTitle>MANA COST</FilterTitle>
                    <LongHr manaCost></LongHr>
                </FlexContainer>
                <FlexContainer region>
                    <FlexContainer rowOne>
                        <ManaBubble active={filterOptions.manaCosts.includes(0)} onClick={() => filterOptions.manaCosts.includes(0) 
                            ? removeFilterOption(0)
                            : addFilterOption(0)
                        }>0</ManaBubble>
                        <ManaBubble active={filterOptions.manaCosts.includes(1)} onClick={() => filterOptions.manaCosts.includes(1) 
                            ? removeFilterOption(1)
                            : addFilterOption(1)
                        }>1</ManaBubble>
                        <ManaBubble active={filterOptions.regions.includes(2)} onClick={() => filterOptions.manaCosts.includes(2) 
                            ? removeFilterOption(2)
                            : addFilterOption(2)
                        }>2</ManaBubble>
                        <ManaBubble active={filterOptions.regions.includes(3)} onClick={() => filterOptions.manaCosts.includes(3) 
                            ? removeFilterOption(3)
                            : addFilterOption(3)
                        }>3</ManaBubble>
                        <ManaBubble active={filterOptions.regions.includes(4)} onClick={() => filterOptions.manaCosts.includes(4) 
                            ? removeFilterOption(4)
                            : addFilterOption(4)
                        }>4</ManaBubble>
                    </FlexContainer>
                    <FlexContainer rowTwo>
                        <ManaBubble active={filterOptions.regions.includes(5)} onClick={() => filterOptions.manaCosts.includes(5) 
                            ? removeFilterOption(5)
                            : addFilterOption(5)
                        }>5</ManaBubble>
                        <ManaBubble active={filterOptions.regions.includes(6)} onClick={() => filterOptions.manaCosts.includes(6) 
                            ? removeFilterOption(6)
                            : addFilterOption(6)
                        }>6</ManaBubble>
                        <ManaBubble active={filterOptions.regions.includes('7+')} onClick={() => filterOptions.manaCosts.includes('7+') 
                            ? removeFilterOption('7+')
                            : addFilterOption('7+')
                        }>7+</ManaBubble>
                    </FlexContainer>
                </FlexContainer>
            </Container>

            <Container filterFlexItem>
                <FlexContainer>
                    <FilterTitle subTitle>TYPE</FilterTitle>
                    <LongHr></LongHr>
                </FlexContainer>
                <FlexContainer region>
                    <SingleCategoryContainer cardType onClick={() => filterOptions.types.includes('Champion') 
                        ? removeFilterOption('Champion')
                        : addFilterOption('Champion')
                    }>
                        <NavIcon active={filterOptions.types.includes('Champion')} cardType className="fas fa-hat-wizard"></NavIcon>
                        <CategoryText active={filterOptions.types.includes('Champion')}>Champion</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer cardType onClick={() => filterOptions.types.includes('Spell') 
                        ? removeFilterOption('Spell')
                        : addFilterOption('Spell')
                    }>
                        <NavIcon active={filterOptions.types.includes('Spell')} cardType className="fab fa-gripfire"></NavIcon>
                        <CategoryText active={filterOptions.types.includes('Spell')}>Spell</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer cardType onClick={() => filterOptions.types.includes('Follower') 
                        ? removeFilterOption('Follower')
                        : addFilterOption('Follower')
                    }>
                        <NavIcon active={filterOptions.types.includes('Follower')} cardType follower className="fas fa-fist-raised"></NavIcon>
                        <CategoryText active={filterOptions.types.includes('Follower')}>Follower</CategoryText>
                    </SingleCategoryContainer>
                </FlexContainer>
            </Container>

            <Container filterFlexItem>
                <FlexContainer>
                    <FilterTitle subTitle>RARITY</FilterTitle>
                    <LongHr></LongHr>
                </FlexContainer>
                <FlexContainer region>
                    <SingleCategoryContainer cardType>
                        <NavIcon cardType className="far fa-circle"></NavIcon>
                        <CategoryText>Legendary</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer cardType>
                        <NavIcon cardType className="far fa-circle"></NavIcon>
                        <CategoryText>Rare</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer cardType>
                        <NavIcon cardType className="far fa-circle"></NavIcon>
                        <CategoryText>Epic</CategoryText>
                    </SingleCategoryContainer>
                    <SingleCategoryContainer cardType>
                        <NavIcon cardType className="far fa-circle"></NavIcon>
                        <CategoryText>Common</CategoryText>
                    </SingleCategoryContainer>
                </FlexContainer>
            </Container>
        </Container>
    );
};

const ManaBubble = styled.div`
    height: 42px;
    cursor: pointer;
    margin-top: 10px;
    width: 42px;
    color: white;
    font-size: 0.8rem;
    font-weight: 800;
    border: 1px solid rgba(204, 173, 112, 1);
    background-color: rgba(21, 39, 86, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    opacity: 0.3;

    ${({ active }) => active && css`
        opacity: 1;
    `}
`;

const CategoryText = styled.span`
    color: rgb(170, 171, 202);
    font-size: 0.9rem;
    font-weight: 600;

    ${({ active }) => active && css`
        color: #CCAD70;
    `}
`;

const RegionImg = styled.img`
    height: 28px;
    opacity: 0.3;
    margin-right: 10px;

    ${({ active }) => active && css`
        opacity: 1;
    `}
`;

const SingleCategoryContainer = styled.div`
    margin: 5px 0;
    width: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;

    ${props =>
    props.cardType && css`
        margin: 10px 0;
    `}
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;

    ${props =>
    props.region && css`
        flex-wrap: wrap;
        padding: 10px 0 0 0;
    `}

    ${props =>
    props.rowOne && css`
        width: 100%;
        justify-content: space-between;
    `}

    ${props =>
        props.rowTwo && css`
            width: 58%;
            justify-content: space-between;
        `}
`;

const ToggleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #4c4277;
`;

export const ToggleButton = styled.i`
    color: #160D33;
    font-size: 1.2rem;
`;

const FilterTitle = styled.h2`
    margin: 0;
    color: white;
    font-weight: 500;

    ${props =>
    props.subTitle && css`
        font-size: 0.8rem;
        margin-right: 15px;
    `}
`;

const mapStateToProps = (state) => {
    return {
        filterToggle: state.filterToggle,
        filterOptions: state.filterOptions
    };
};

export default connect(mapStateToProps, { toggleFilter, addFilterOption, removeFilterOption })(AdvancedFilter);