#!/usr/bin/env python

import json
import sys
import os
import gzip

def process_line(line, lineFields):
  ## tokenize
  line = line.strip().split('	')
  ## make items lists when necessary
  line[8] = line[8].split(',')
  line[9] = line[9].split(',')
  geneDict = { key:val for key,val in zip(lineFields, line) }
  return geneDict['canonicalID'], geneDict

def __main__():
  '''
  Convert the genePred format to a json. This will be consumed by our geneSearcher app.
  '''
  inputFile = sys.argv[1]
  outputFile = os.path.basename(inputFile).rstrip('.txt.gz') + '.json'
  lineFields = ['name',
              'chrom',
              'strand',
              'txStart',
              'txEnd',
              'cdsStart',
              'cdsEnd',
              'exonCount',
              'exonStarts',
              'exonEnds',
              'geneID',
              'canonicalID',
              'cdsStartStat',
              'cdsEndStat',
              'exonFrames',
              'gtfGeneName']

  geneDict = {}
  with gzip.open(inputFile) as fileConnection:
    for line in fileConnection:
      ## not efficient but who cares
      gene, data = process_line(line, lineFields)
      geneDict[gene] = data
  
  json.dump(geneDict, open(outputFile, 'w'))

if __name__ == '__main__':
    __main__()
