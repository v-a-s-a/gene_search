#!/usr/bin/env python

import gzip as gz
import json

dropSeqFile = 'GSM1626795_P14Retina_3.digital_expression.txt.gz'
outputFile = dropSeqFile.strip('.txt.gz') + '.json'

def __main__():
  '''
  Convert dropseq digital expression matrix to json.
  '''
  data = {}
  conn = gz.open(dropSeqFile, 'rb')
  header = conn.next()
  for line in conn:
    line = line.strip().split()
    gene = line[0].split(':')[2]
    data[gene] = line[1:]
  json.dump(data, open(outputFile, 'w'))

if __name__ == '__main__':
    __main__()
