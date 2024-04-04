import {Data} from "../../../domain/models/characters/Data.ts";
import {SearchContext, SearchContextType} from "../../components/visualizer/VisualizerContext.tsx";
import {Result} from "../../../domain/models/characters/Result.ts";
import {CharacterService} from "../../../domain/services/character.service.ts";
import Card from "./Card.tsx";
import Visualizer from "../../components/visualizer/Visualizer.tsx";

export default function Character() {
    const search = [
        {
            queryParams: '?name=',
            placeholder: 'Search by name'
        },
        {
            queryParams: '?status=',
            placeholder: 'Search by status'
        },
        {
            queryParams: '?gender=',
            placeholder: 'Search by gender'
        }
    ]
    return (
        <>
            <Visualizer<Data, SearchContextType, Result> Service={CharacterService} search={search}
                                                         skeletonClass={'w-[160px] h-[260px] md:w-[466px] md:h-[160px]'}
                                                         context={SearchContext} Card={Card}/>
        </>
    )
}