import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BarLoader } from "react-spinners";
import { Page } from "../../Page";
import { PotteryModal } from "./PotteryModal";

export const potteryTypes = ['porcelain', 'raku', 'terra cotta', 'clay'];

const PotterySection = (props) => {
    const { potteryType, setSelected } = props;

    const context = useMemo(() => {
        switch (potteryType) {
            case 'clay':
                return require.context('../../../img/pottery_2026/clay', false, /\.jpg$/)
            case 'porcelain':
                return require.context('../../../img/pottery_2026/porcelain', false, /\.jpg$/)
            case 'raku':
                return require.context('../../../img/pottery_2026/raku', false, /\.jpg$/)
            case 'terra cotta':
                return require.context('../../../img/pottery_2026/terra cotta', false, /\.jpg$/)
        }
    }, [potteryType])

    const filenames = context.keys();
    const potteryNames = filenames.map((f) => f.slice(2, -4));

    return (
        <div>
            <div className="w-full text-center pt-8 pb-4 text-lg">{potteryType.toString().replace(/\b\w/g, char => char.toUpperCase())}</div>
            <div className="grid md:grid-cols-5 gap-2">
                {potteryNames.map((p, i) => {
                    return (
                        <div key={i}>
                            <LazyLoadImage
                                alt={`pottery-${p}`}
                                src={require(`../../../img/pottery_2026/${potteryType}/${p}.jpg`)}
                                placeholder={
                                    <div className="flex items-center">
                                        <BarLoader
                                            color={"#94a3b8"}
                                            loading={true}
                                            size={50}
                                            aria-label="Loading Spinner"
                                        />
                                    </div>
                                }
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelected(`${potteryType}-${p}`);
                                }}
                                className="hover:cursor-pointer"
                            />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export function Pottery() {
    const [selected, setSelected] = useState();

    return (
        <Page title="Pottery">
            <PotteryModal selected={selected} setSelected={setSelected} />
            {potteryTypes.map((t) => <PotterySection potteryType={t} setSelected={setSelected} selected={selected} />)}
        </Page>
    );
}